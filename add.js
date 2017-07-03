$(function(){
	var n=1
	$("#doadd").click(function(){
		var name=$("#name").val()
		// console.log(name)
		// alert(name)
		var age=$("#age").val()
		var email=$("#email").val()
		console.log(name)
		console.log(age)
		console.log(email)
		var tr=$("<tr></tr>")
		
		var td1=$("<td>"+n+"</td>")
		var td2=$("<td>"+name+"</td>")
		var td3=$("<td>"+age+"</td>")
		var td4=$("<td>"+email+"</td>")
		n++
		var td5=$("<td class='text-center'> <button class='btn btn-danger shanchu'>删除</button><button class='btn btn-info dochangge'data-toggle='modal' data-target='#myModal'data-toggle='modal' data-target='#myModal'>修改</button></td>")
		
		var arr=[td1,td2,td3,td4,td5]
		for(var i=0;i<arr.length;i++){
			tr.append(arr[i])
		}
        $("#tb").append(tr)
       
    		$(".shanchu").click(function(){
    		$(this).parent().parent().remove();
        })
	$(".dochangge").click(function(){
 
	$("#rechange").click(()=>{
		var rename=$("#name2").val()
		var reage=$("#age2").val()
		var reemail=$("#email2").val()
		console.log(rename)
	
		var tdd2=$("<td>"+rename+"</td>")
		var tdd3=$("<td>"+reage+"</td>")
		var tdd4=$("<td>"+reemail+"</td>")
		var arr=[tdd1,tdd2,tdd3,tdd4,tdd5]
		
		// $(this).parent().parent().remove();
		var trr=$(this).parent().parent()
		trr[0].replaceChild(tdd2, td2)
		trr[0].replaceChild(tdd3, td3)
		trr[0].replaceChild(tdd4, td4)

		
	})
	   

		})
	})
})


// function show(){
	
//     function $(id){
//     	return document.getElementById(id)
//     }

//     function cte(string){
//     	return document.createElement(string)
//     }
//     var trr=cte("tr")
//     var tdd=cte("td")
//     var tdd1=cte("td")
//     var tdd2=cte("td")
//     var tdd3=cte("td")
//     var tdd4=cte("td")
  
//     tdd.innerHTML= $("name").value
//     tdd1.innerHTML= $("name").value 
//     tdd2.innerHTML= $("age").value
//     tdd3.innerHTML= $("email").value

//    var dbt=cte("input")
//    dbt.type="button"
//    dbt.value="delete"
//    dbt.onclick=function(){
//    	$("bt").removeChild(this.parentNode.parentNode)
//    } 
//    tdd4.appendChild(dbt)
//    trr.appendChild(tdd)
//    trr.appendChild(tdd1)
//    trr.appendChild(tdd2)
//    trr.appendChild(tdd3)
//    trr.appendChild(tdd4)
//    var  trs=bt.getElementsByTagName("tr")
//    bt.insertBefore(trr,trs[0]);
 
// }