     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;

             (function thirdFunction(){
                 var a = 7;

                 (function fourthFunction(){
                     var a = 1;
       console.log("a: "+a+", b: "+b+", c: "+c);
                 })();
             })();
         })();
     })();