
    
    //(P x R x (1+R)^N)/ ((1+R)^(N-1))
    
    //p: principle or your loan about;
//    P= Principal or your loan amount
//R= Rate of interest
//N= Tenure (loan term in number of years)
//Your EMI includes two main components – principal and interest. In the early part of your tenure, the interest amount is higher and that becomes progressively lower. Towards the end of the tenure, the principal amount forms a large proportion of the EMI.


window.onload = function(){
    function EmiCalc(lam,ten,ri){
    this.loanAmount = lam;
    this.tenure = ten;
    this.ri = ri;
        
        
     
//EMI= [2,00,000 x 1.66/100 x (1+1.66/100) ^ 24 / [((1+1.66/100) ^ 24) - 1)
       // (principle * rateofIntererst) *((1+rateofInterest)^tenurein months)/(((1+r)^tenuein in months)-1)

    
    this.emi = function(){
       
        
        var p = this.loanAmount;
        var n = this.tenure *12;
        var r = (this.ri)/(12*100);
        
        var emivalu = ((p*r)*(Math.pow((1+r),n)))/((Math.pow((1+r),n))-1);
        return emivalu.toFixed(2);
        
       // return (p * r * Math.pow((1+r),n))/(Math.pow((1+r),n)-1);
       
    }
    
    this.onlyInterest = function(){
        var onlyint =  ((this.emi() * this.tenure * 12) - this.loanAmount).toFixed(2);
        return onlyint;
    }
}
    
    let pr = document.getElementById("principle");
    let pri = document.getElementById("pramt");
    let prd = document.getElementById("period");
    let prdi = document.getElementById("lpr");
    let int = document.getElementById("ir");
    let inti = document.getElementById("irt");
    let bn = document.getElementById("btn");
    
    pr.addEventListener("change",function(){pri.value = this.value});
    prd.addEventListener("change",function(){prdi.value = this.value});
    int.addEventListener("change",function(){inti.value = this.value});
    
     pri.addEventListener("keyup",function(){
         pr.value = this.value;
         caluEmi();
            }
                         );
    prdi.addEventListener("keyup",function(){
        prd.value = this.value;
        caluEmi();
    });
    inti.addEventListener("keyup",function(){
        int.value = this.value;
        caluEmi();
    });
    
    function caluEmi(){
        let prn = +pr.value;
        let tenure = +prd.value;
        let  intrate= +int.value;
        
        var mycl = new EmiCalc(prn,tenure,intrate);
        document.getElementById("emipm").innerHTML = mycl.emi();
        document.getElementById("paidint").innerHTML = mycl.onlyInterest();
    }
    
   bn.addEventListener("click",caluEmi);
}