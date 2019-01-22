
const speed = 100;
const main = document.getElementById('main_content');
const about = document.getElementById('about');
const htmlcss = document.getElementById('htmlcss');
const jscript = document.getElementById('javascript');
const webtech = document.getElementById('webtech');
const description = document.getElementById('description');
const list = [
    'Front-End Developer',
    'Programmer',
    'React Developer',
    'SEO Enthusiast',
    'Boardgame Enthusiast',
    'Pug Lover',
    'Funny Man',
    ':)'
]

// Functions //
inserter = (event) => {
    const txt = event.target.title.toString();
    let i = 0;
    event.target.innerHTML = null;

    again = () => {
        if (i < txt.length) {
          event.target.innerHTML += txt.charAt(i) ;
          i++;
          setTimeout(again, speed);
        };
    };
    again();
};

deleter = (event) => {
    event.target.textContent = null;
    about.innerHTML = '<i class="fas fa-question fa-3x">';
    htmlcss.innerHTML = '<i class="fas fa-code fa-3x"></i>';
    jscript.innerHTML = '<i class="fab fa-js-square fa-3x"></i>';
    webtech.innerHTML= '<i class="fas fa-cogs fa-3x"></i>';
};


// Event Listeners //
main.addEventListener('mouseover', (event) => {
    if (event.target == about) {
        inserter(event);
    } else if (event.target == htmlcss) {
        inserter(event)
    } else if (event.target == jscript) {
        inserter(event)
    } else if (event.target == webtech) {
        inserter(event)
    }
});

main.addEventListener('mouseout', (event) => {
    if (event.target == about){
        deleter(event);
    } else if (event.target == htmlcss){
        deleter(event);
    } else if (event.target == jscript){
        deleter(event);
    } else if (event.target == webtech){
        deleter(event);
    }
}); 

// describe = () => {
//     const txt = list[0];
//     let i= 0;
//     entering = () => {
//         console.log(i);
//         if (i < txt.length) {
//           description.innerHTML += txt.charAt(i);
//           i++;
//           setTimeout(entering, speed);
//         };
//     };

//     deleting = () => {
//         i--;
//         setTimeout(deleting, speed);
//     };
    
//     entering();
    
// };

// describe();

document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [
        'Front-End Developer',
        'Programmer',
        'React Developer',
        'SEO Enthusiast',
        'Boardgame Enthusiast',
        'Pug Lover',
        'Single',
        'Ready to Mingle'
    ]
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to description
       document.getElementById("description").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });


  /* RESUME ANIMATION*/
