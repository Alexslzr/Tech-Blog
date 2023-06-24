

const btn = document.getElementById('post-comment');


const postCommentHandler = async(event)=>{
if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const newComment = document.getElementById('newComment')

    if(newComment){
        const response = await fetch(`/api/comment/${id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            alert( 'comment posted')
            document.location.replace('/homepage');
          } else {
            alert('Failed to post');
          }
        } 
    }
}

btn.addEventListener('click', postCommentHandler)