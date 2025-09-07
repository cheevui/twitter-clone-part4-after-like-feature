import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { savePost } from "../features/posts/postsSlice";

export default function NewPostModal({ show, handleClose }) {
    const [postContent, setPostContent] = useState("");
    const dispatch = useDispatch();

    //v2
    // const handleSave = () => {
    //     //Get stored JWT Token
    //     const token = localStorage.getItem("authToken");

    //     //Decode the token to fetch user id
    //     const decode = jwtDecode(token);
    //     const userId = decode.id // May change depending on how the server encode the token

    //     //Prepare data to be sent
    //     const data = {
    //         title: "Post Title",  //Add functionality to set this properly
    //         content: postContent,
    //         user_id: userId,
    //     };

    //     //Make your API call here
    //     axios
    //         .post("https://3779aa9b-2446-4cca-b828-03b01396caad-00-19xgol6yx3357.pike.replit.dev/posts", data)
    //         .then((response) => {
    //             console.log("Success:", response.data);
    //             handleClose();
    //         })
    //         .catch((error) => {
    //             console.error("Error", error);
    //         });
    // }

    const handleSave = () => {
        dispatch(savePost(postContent));
        handleClose();
        setPostContent("");
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="postContent">
                            <Form.Control
                                placeholder="What is happening?!"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setPostContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={handleSave}
                    >
                        Tweet
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}