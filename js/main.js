// Enter your JavaScript for the solution here...

//WINDOW LOAD EVENT
window.addEventListener('load', function(e){
    const memeForm = document.querySelector('.meme-form');
    const topText = memeForm.querySelector('#meme-top-text');
    const bottomText = memeForm.querySelector('#meme-bottom-text');
    const memeMenu = memeForm.querySelector('#meme-image');
    let errorCount = 1; 

    //FOCUS EVENTS
        topText.addEventListener('focus', function(e){
            document.querySelector('.error').textContent = '';
            errorCount = 0;
        })
        bottomText.addEventListener('focus', function(e){
            document.querySelector('.error').textContent = '';
            errorCount = 0;
        })
        memeMenu.addEventListener('focus', function(e){
            document.querySelector('.error').textContent = '';
            errorCount = 0;
        })

    //SUBMIT EVENT
    memeForm.addEventListener('submit', function(e){
        e.preventDefault();
        validateLogin(e.currentTarget);
    })

    //VALIDATE LOGIN
    function validateLogin(){
        const userTopText = topText.value.trim();
        const userBottomText = bottomText.value.trim();
        const generatedTopText = document.querySelector('.top-text');
        const generatedBottomText = document.querySelector('.bottom-text');

        if(userTopText === ''){
            document.querySelector('.error').textContent = 'Enter Top and Bottom Text';
            errorCount = errorCount + 1;
        } 
        if(userBottomText === ''){
            document.querySelector('.error').textContent = 'Enter Top and Bottom Text';
            errorCount = errorCount + 1;
        }
        if(document.querySelector('#meme-image').value === ''){
            document.querySelector('.error').textContent = 'Please Select an Image';
            errorCount = errorCount + 1;
        }

        if(errorCount === 0){
            generatedTopText.textContent = userTopText;
            generatedBottomText.textContent = userBottomText;

            if(memeMenu.value === 'fry-meme'){
                document.querySelector('img').src = 'img/fry-meme.png';
                document.querySelector('img').alt = 'Fry meme';
            }
            if(memeMenu.value === 'one-does-not-simply-meme'){
                document.querySelector('img').src = 'img/one-does-not-simply-meme.png';
                document.querySelector('img').alt = 'One does not simply meme';
            }
            if(memeMenu.value === 'most-interesting-man-meme'){
                document.querySelector('img').src = 'img/most-interesting-man-meme.png';
                document.querySelector('img').alt = 'Most interesting man meme';
            }
        } 

    }

    //RESET EVENT
    memeForm.addEventListener('reset', function(e){
        document.querySelector('img').src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown';
        document.querySelector('img').alt = 'Placeholder Image';
        document.querySelector('.top-text').textContent = '';
        document.querySelector('.bottom-text').textContent = '';
        document.querySelector('.error').textContent = '';
    })
})
