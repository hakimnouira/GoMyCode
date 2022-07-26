
 

let n = 3;
   
    function dotProduct(vect_A, vect_B)
    {
   
        let product = 0;
   
        // Loop for calculate dot product
        for (let i = 0; i < n; i++)
            product = product + vect_A[i] * vect_B[i];
        return product;
    }
   
    
    function crossProduct(vect_A, vect_B,
                             cross_P)
   
    {
   
        cross_P[0] = vect_A[1] * vect_B[2]
                     - vect_A[2] * vect_B[1];
        cross_P[1] = vect_A[2] * vect_B[0]
                     - vect_A[0] * vect_B[2];
        cross_P[2] = vect_A[0] * vect_B[1]
                     - vect_A[1] * vect_B[0];
    } 

     

 
        let vect_A = [ 3, -5, 4 ];
        let vect_B = [ 2, 6, 5 ];
        let cross_P = [];
   
        
        document.write("Dot product:");
        document.write(dotProduct(vect_A, vect_B) + "<br/>");
   
        
        document.write("Cross product:");
        crossProduct(vect_A, vect_B, cross_P);
   
       
        for (let i = 0; i < n; i++)
   
            document.write(cross_P[i] + " ");
             
              