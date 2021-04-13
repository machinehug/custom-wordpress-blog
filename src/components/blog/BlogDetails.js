import { useState, useEffect } from "react";
import useAxios from "../../constants/useAxios";
import { useHistory, useParams } from "react-router-dom";
import FeedbackMessage from "../common/FeedbackMessage";
import Heading from "../layout/Heading";

export default function BlogDetails() {

    const [post, setPost] = useState(null);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	const http = useAxios();

    let { id } = useParams();

    useEffect(function () {
		(async function () {
			try {
				const response = await http.get(`wp/v2/pages/${id}`);
				setPost(response.data);
			} catch (error) {
				setFetchError(error.toString());
			} finally {
				setFetchingPost(false);
			};
		})()},
		// eslint-disable-next-line react-hooks/exhaustive-deps
	[]);

	const history = useHistory();
	
    if (!id) {
		return history.push("/");
	};

    if (fetchingPost) {
		return <FeedbackMessage type="info" message="Loading the blog details..." />;
	};

	if (fetchError) {
		return <FeedbackMessage title={fetchError} type="danger" message="We cannot load the blog. Please try again later." />;
	};

	const date = formatDate(post.date);

	return (
		    <section>
			    <div>
                    <Heading title={post.title.rendered} />
                    <div className="date">Date: {date}</div>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                </div>
		    </section>
	);
};

function formatDate(post) {

	const formatDate = new Date(post);
	const date = formatDate.getUTCDate();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[formatDate.getUTCMonth()];
	const year = formatDate.getUTCFullYear();

	return `${date} ${month} ${year}`;
};