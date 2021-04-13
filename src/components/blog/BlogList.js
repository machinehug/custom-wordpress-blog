import { useState, useEffect } from "react";
import useAxios from "../../constants/useAxios";
import FeedbackMessage from "../common/FeedbackMessage";

export default function BlogList() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {
		(async function () {
			try {
				const response = await http.get("wp/v2/pages");
                console.log("RESPONSE:", response.data);
                setPosts(response.data);
			} catch (error) {
				console.log("ERROR: " + error);
                setError(error.toString());
			} finally {
				setLoading(false);
			};
		})()},
        // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    if (loading) {
        return <FeedbackMessage type="info" message="Loading..." />;
    };

    if (error) {
        return <FeedbackMessage title="Error." type="danger" message="We cannot seem to load the posts. Please try again later." />;
    };

    let html = "";

    posts.forEach((post) => {
        html +=
        `<div class="card">
            <div class="card-body">
                <h1 class="card-title h4">${post.title.rendered}</h1>
                <a href=${`/page/${post.id}`}><Button type="button" class="btn btn-primary">Read More</Button></a>
            </div>
        </div>`;
    });

    return <section dangerouslySetInnerHTML={{ __html: html }} />   
};