const btn = document.getElementById('post-comment');

const postCommentHandler = async(event)=>{
if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const newComment = document.getElementById('newComment').value.trim();

    if(newComment){
        const response = await fetch(`/api/comment/${id}`, {
            method: 'POST',
            body: JSON.stringify({ newComment }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            console.log('comment posted')
          } else {
            alert('Failed to post');
          }
        } 
    }
}

btn.addEventListener('click', postCommentHandler)