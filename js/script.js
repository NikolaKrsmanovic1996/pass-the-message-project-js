//immediate invoked function expression
//i don't wanna global effect on my variables

(function(){
 
    document.getElementById('message-form').addEventListener('submit',function(defaut){
         //im preventing a default behavior of inputs value from form in index.html
        defaut.preventDefault();
       //i'm getting a value from input
        let message = document.getElementById('message');
        //got value
        let value = message.value;
        console.log(value);
        //if user enters empty value it will display feedback from index.html(main.css)edit message need to ofc to target that feedback and to add on show css for displaying
        if(message.value === ""){
            //selected feedback from html
            let feedback = document.querySelector('.feedback');
            //added feedback to show from css
            feedback.classList.add('show');
            //function for creating delay i said here remove that feedmessage after 2 seconds
            setTimeout(function(){
                   feedback.classList.remove('show')
            },2000)
        }else{
            //else add that value into textContent of value 
            document.querySelector(".message-content").textContent = value;
            message.value = "";
        }
    })

})();
//invoked function