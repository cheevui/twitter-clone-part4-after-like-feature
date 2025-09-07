// //v2
// import { useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import useLocalStorage from "use-local-storage";
// import ProfileSideBar from "../components/ProfileSideBar";
// import ProfileMidBody from "../components/ProfileMidBody";

// export default function ProfilePage() {
//     const [authToken, setAuthToken] = useLocalStorage("authToken", "");
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!authToken) navigate("/login");
//     }, [authToken, navigate]);
//     const handleLogout = () => setAuthToken("");
//     return (
//         <>
//             <Container>
//                 <Row>
//                     <ProfileSideBar handleLogout={handleLogout} />
//                     <ProfileMidBody />
//                 </Row>
//             </Container>
//         </>
//     );
// }

import { getAuth } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import ProfileMidBody from "../components/ProfileMidBody";
import ProfileSideBar from "../components/ProfileSideBar";

export default function ProfilePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (!currentUser) navigate("/login");
    }, [currentUser, navigate])

    const handleLogout = () => auth.signOut();
    return (
        <>
            <Container>
                <Row>
                    <ProfileSideBar handleLogout={handleLogout} />
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    );
}

