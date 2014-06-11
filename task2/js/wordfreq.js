
$(document).ready(function(){
    $('#calcForm').submit(function(e){
        e.preventDefault()
        Input=new Array()   
        UWorld=new Array() 
        $('.freqTable').html("<tr>\n\
        <td></td>\n\
        <td></td>\n\
        </tr>")
        inputWordEach=$('#first').val()+" "+$('#second').val()+" "+$('#third').val()+" "+$('#fourth').val()+" "+$('#fifth').val()
        Input=inputWordEach.split(" ");
        numOfWords=Input.length 
        numOfUWorld=UWorld.length 
        allWords=new Array(Input.length)
        xyz=new Array(Input.length) 
        for(var c=0;c<Input.length;c++)
            {
                xyz[c]=Input[c].toLowerCase() 
            }
            for(var d=0;d<Input.length;d++)
            {
                allWords[d]=xyz[d].replace(/\./g, '')
            }
        if(numOfUWorld == 0)
            {
                UWorld.push(allWords[0])
            }
        for(var i = 0;i<numOfWords; i++)
        {
            for(var j=0;j<UWorld.length;j++)
                {
                    
                   if(allWords[i].localeCompare(UWorld[j]) == 0 )
                       {
                                break 
                       }
                      else 
                          {
                              if(j == UWorld.length-1)
                                  {
                                     
                                      
                                      UWorld.push(allWords[i]);break
                                  }
                                  
                          }
                         
                         
                }
            
        }
      $('#fetchUniNo').html(UWorld.length)
        saveUWorld=new Array(UWorld.length)
        for(var n=0;n<UWorld.length;n++)
                saveUWorld[n]=0
        
         for(var l = 0;l<numOfWords; l++)
        {
            for(var m=0;m<UWorld.length;m++)
                {
                   if(allWords[l].localeCompare(UWorld[m]) == 0 )
                       {
                           saveUWorld[m]++ 
                       }
                      else
                          {
                              
                          }
                }
            
        }
        
        //to sort the array in ascending order
       var Grouped = []
    
    for(var i=0; i<UWorld.length; ++i) {
    Grouped.push({
        saveElem: saveUWorld[i],
        uniqueElem: UWorld[i]
    });
}
Grouped.sort(function(a, b) {
    var save = a.saveElem
    unique = b.saveElem;

    return save === unique ? 0 : (save > unique ? -1 : 1);
});
UWorld = [];
saveUWorld = [];
for(var i=0; i<Grouped.length; ++i) {
    saveUWorld.push(Grouped[i].saveElem);
    UWorld.push(Grouped[i].uniqueElem);
    
}
        for(var p=0;p<UWorld.length;p++)
            {
$('.freqTable').append("<tr>\n\
<td>"+UWorld[p]+"</td>\n\
<td>"+saveUWorld[p]+"</td>\n\
</tr>")
}
})
})

