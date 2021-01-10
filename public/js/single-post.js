async function submitCommentHandler(event) {
  event.preventDefault();
  //get info we need
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const comment_text = document.querySelector("#comment-text").value.trim();
  //const user_id = "1"; //TODO set to session auth
  if (comment_text) {
    //make sure we have comment text
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment_text, //removed user id
        post_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //check if all good
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText); // find better way to do this
    }
  }
}

//handle editing the post
function editPostHandler(event) {
  event.preventDefault();
}

//handle deleting the post
async function deletePostHandler(event) {
  event.preventDefault();
  //make request to post route delete with the current post id in nav bar
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/posts/" + post_id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //check if all good
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText); // find better way
  }
}

//post a commment
document
  .querySelector("#post-comment-btn")
  .addEventListener("click", submitCommentHandler);
//edit post
//document.querySelector("#edit-btn").addEventListener("click", editPostHandler);
//delete post
document
  .querySelector("#delete-btn")
  .addEventListener("click", deletePostHandler);
