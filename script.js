
    var row =10
    var col =10
    var loop = true
    var start = "id0x0"
    var end = "id"+(row-1)+"x"+(col-1)
    var stuck=false
    var wall=[]
    var count=0
    var gotit=0
    
    
        
    
    /*
    
    {Auto}  ==) F0
    [reset] ==) F6
    
    [Start] ==) F5 ==) F1 ==) ?
    
    */    
        
    F0()
    
    function F11(r1,c1,r2,c2){
            //var change=document.getElementById(start).innerHTML
            var v1=parseInt(document.getElementById("id"+r1+"x"+c1).innerHTML)
            var v2=parseInt(document.getElementById("id"+r2+"x"+c2).innerHTML)
            
            if(v2<v1){
                var v3=v1
                v1=v2
                v2=v3
            }
        
            var vmin=parseInt(document.getElementById("id"+r1+"x"+c1).innerHTML)
             var vmax=parseInt(document.getElementById("id"+r2+"x"+c2).innerHTML)
        if(c1==c2){
            var min=r1
            var max=r2}
            
        else{
            var min=c1
            var max=c2}
        
            if(max<min){
                var y=max
                max=min
                min=y}
        
            if(vmax<vmin){
                var y=vmax
                vmax=vmin
                vmin=y}
        
            
        for (var r=0;r<row;r++) 
        for (var c=0;c<col;c++){
            var i="id"+r+"x"+c
            var id=document.getElementById(i)
            if(id.innerHTML>v1&&id.innerHTML<v2)
                id.innerHTML="_"
            else if(id.innerHTML>=v2)
                id.innerHTML-=((v2-v1)-(max-min))
            if(c1==c2){
                if(document.getElementById("id"+r1+"x"+c1).innerHTML>document.getElementById("id"+r2+"x"+c2).innerHTML)
                for(var x=(r1+1);x<r2;x++)
                    document.getElementById("id"+x+"x"+c1).innerHTML=(vmin+parseInt(x-r1))
                else
                for(var x=(r1+1);x<r2;x++)
                    document.getElementById("id"+x+"x"+c1).innerHTML=(vmin+parseInt(r2-x))
            }
            else{
                if(document.getElementById("id"+r1+"x"+c1).innerHTML>document.getElementById("id"+r2+"x"+c2).innerHTML)
                for(var x=(c1+1);x<c2;x++)
                    document.getElementById("id"+r1+"x"+x).innerHTML=(vmin+parseInt(x-c1))
                else
                for(var x=(c1+1);x<c2;x++)
                    document.getElementById("id"+r1+"x"+x).innerHTML=(vmin+parseInt(c2-x))
            }
    F4()}
        console.log("From",document.getElementById("id"+r1+"x"+c1).innerHTML,"to",document.getElementById("id"+r2+"x"+c2).innerHTML)
       // if(document.getElementById(start).innerHTML==change)
            
    }    
        
    //Shortcut searcher    
    function F10(){
        
        var rr,rv1,rv2,cc,cv1,cv2,ii,iid;
        var ri=false
        var ci=false
        
    if(start.innerHTML!="0")
        for (var r=0;r<row;r++)
        for (var c=0;c<col;c++){
            var i="id"+r+"x"+c
            var id=document.getElementById(i)
            if(isNaN(id.innerHTML)==true){
                rr=r
                cc=c
                
                while(rr>=0&&ri==false){
                ii="id"+rr+"x"+cc
                iid=document.getElementById(ii)
                    if(isNaN(iid.innerHTML)==false){
                        rv1=rr;
                        rr=r
                        while(rr<row&&ri==false){ 
                ii="id"+rr+"x"+cc
                iid=document.getElementById(ii)
                if(isNaN(iid.innerHTML)==false){ 
                            ri=true
                            rv2=rr
                            r=row
                            c=col
                            F11(rv1,cc,rv2,cc)     
                }
                            rr++}
                        rr=0
                    }
                    rr--
                }
                
                if(r!=row&&c!=col){
                rr=r
                cc=c
                
                while(cc>=0&&ci==false){
                ii="id"+rr+"x"+cc
                iid=document.getElementById(ii)
                    if(isNaN(iid.innerHTML)==false){
                        cv1=cc;
                        cc=c
                        while(cc<row&&ci==false){ 
                ii="id"+rr+"x"+cc
                iid=document.getElementById(ii)
                if(isNaN(iid.innerHTML)==false){ 
                            ci=true
                            cv2=cc
                            r=row
                            c=col
                            F11(rr,cv1,rr,cv2)     
                }
                            cc++}
                        cc=0
                    }
                    cc--
                }
        }
            else{
                 
            }
        }}
    }
        
        //Automate task until the path is found
    function F9(){
        var gotitagain=gotit
        
        while(gotitagain==gotit){
            F6()
            console.log("No. of times ran ",count)}
    }
        
        //Auto try for 100 times
    function F8(){
        for(var x=1;x<=100;x++){
            F6()
            console.log("completion: ",x,"%")
        }
    }    

        //Walls
    function F7(i){
        var id = document.getElementById(i)
        if(wall.indexOf(i)!=-1){
            wall.splice(wall.indexOf(i),1)
            id.innerHTML="_"
        }
        else{
        wall.push(i)
        id.innerHTML="x"
        }
        F4()
    }    
        
        //First function that is also the Reset button
    function F6(){
        
        for (var r=0;r<row;r++)
        for (var c=0;c<col;c++){
        var i="id"+r+"x"+c
        var id=document.getElementById(i)
        id.innerHTML="_"
        id.style.backgroundColor="white"
        }
        document.getElementById(start).style.backgroundColor="red"
        document.getElementById(end).style.backgroundColor="red"
         for(var w=0;w<wall.length;w++){
        document.getElementById(wall[w]).style.backgroundColor="blue"
         document.getElementById(wall[w]).innerHTML="x"}
        
         document.getElementById(start).innerHTML="0"
         document.getElementById(end).innerHTML="_"
        
        F5()
    } 
        
        //Main function
    function F5(){
        stuck=false
    while(loop==true){
        for (var r=0;r<row;r++)
        for (var c=0;c<col;c++){
        var i="id"+r+"x"+c
        var id=document.getElementById(i)
            if((id.innerHTML==0)&&(i!=end)){
                F1(i)
                F4()
            r=0
            c=-1
            if(stuck==true){
                r=row
                c=col
            }
            }
        }
        if(document.getElementById(end).innerHTML==0){
            document.body.style.backgroundColor="green"
        gotit++}
        else
            document.body.style.backgroundColor="white"
        count++
        id2.innerHTML=gotit+" out of "+count+" ("+(gotit/count*100).toFixed(1)+"%)"
        loop = false 
    }
    loop = true
    }
    
        //Coloring the table at the end
    function F4(){
        for (var r=0;r<row;r++)
        for (var c=0;c<col;c++){
        var i="id"+r+"x"+c
        var id=document.getElementById(i)
        if(id.innerHTML=="_")
            id.style.backgroundColor="white"
        else{
            id.style.backgroundColor="yellow"
            if(id.innerHTML=="x")
            id.style.backgroundColor="blue"
            if(id.innerHTML=="0")
            id.style.backgroundColor="green"
        }
        document.getElementById(start).style.backgroundColor="red"
         document.getElementById(end).style.backgroundColor="red"
    }}
        
        //For each Movement changing the numbering 
    function F3(x){
        for (var r=0;r<row;r++)
        for (var c=0;c<col;c++){
            var i="id"+r+"x"+c
            var id=document.getElementById(i)
            if(isNaN(id.innerHTML)==false){
                var y=parseInt(id.innerHTML)
                id.innerHTML=y+1}
            document.getElementById(x).innerHTML="0"
        }
    }
        
        //choosing from list
    function F2(ir,ic){
        var ii = "id"+ir+"x"+ic
        var iid=document.getElementById(ii)
        if(iid.innerHTML=="_")
        return ii
        
        else return false
    }
     
        //creating list
    function F1(i){
        //console.log(i)
        //console.log(i.charAt(2))
        var n=0
        var r=parseInt(i.substring(2,i.indexOf("x")))
        var c=parseInt(i.substring(i.indexOf("x")+1,i.length))
        var id;
        var option=[];
        var chosen;
        

        //console.log("r=",r,"c=",c)
        if((r+1)<row)
                if(F2((r+1),c)!= false){
                    n++
                    option.push(F2((r+1),c))
                    }
        if((c-1)>=0)
                if(F2(r,(c-1))!=false){
                    n++
                    option.push(F2(r,(c-1)))
                    }
        if((r-1)>=0)
                if(F2((r-1),c)!=false){
                    n++
                    option.push(F2((r-1),c))
                    }
        if((c+1)<col)
                if(F2(r,(c+1))!=false){
                    n++
                    option.push(F2(r,(c+1)))
                }
        //console.log(option)
        //console.log(n)
        if(n!=0)
        F3(option[Math.floor(Math.random()*n)])
        else 
            stuck = true;
    }
    
        //Table creation
    function F0(){
    
    var html    
    var w=window.innerWidth-20;
    var h=window.innerHeight-140;
    
    html=""
    html+="<table id='id1' border='1' width='"+w+"' height='"+h+"' style='padding='0'>"
             
        for (var r=0;r<row;r++){
            html+="<tr>"
        for (var c=0;c<col;c++){
            html+="<td id='id"+r+"x"+c+"' onclick='F7(this.id)'>"+"_"+"</td>"
        }
            html+="</tr>"
        }
    html+="</table>"
    id0.innerHTML=html 
        document.getElementById("id1").style.fontSize = "100%";
        document.getElementById("id1").style.tableLayout="fixed";
        
        document.getElementById(start).innerHTML="0"
        
        for(var w=0;w<wall.length;w++)
        document.getElementById(wall[w]).innerHTML="x"
        F4()
    }