module.exports = function longestConsecutiveLength(array) {

  if(array.length==0) return 0;
  array.sort(function(a,b) {return (a-b)});
let len=0, SeqCnt=[];

for(let i=1;i<array.length;i++){
  if(array[i]-array[i-1] == 1)
{
  SeqCnt.push(array[i]);
}else if(array[i] != array[i-1]){
  SeqCnt=[];
}
len=Math.max(SeqCnt.length,len);
}

return ++len;
}

