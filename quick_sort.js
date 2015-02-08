/*
 Quick sort algorithm sorts an array for O(n*log(n)) time.

 @author Evgeniy Kuznetsov
 @date 8.2.2015 14:46
 */

// @param {Array.<Integer>} a
// @param {Function} choosePivotFn Optional function for choosing pivot point
// @return {Array.<Integer>} Sorted version of a given array
function quickSort(a, choosePivotFn){

  // Default function for choosing pivot point
  // @param {Array.<Integer>} a
  // @param {Integer} s Start bound
  // @param {Integer} e End bound
  // @return {Integer}
  var choosePivot = function(a, s, e){
    return s;
  }

  // Swaps two elements in a given array
  // @param {Array.<Integer>} a
  // @param {Integer} fi Index of the first element
  // @param {Integer} si Index of the second element
  var swap = function(a, fi, si){
    var fe = a[fi];
    var se = a[si];

    a[fi]=se; a[si]=fe;
  }

  // Partition an array
  // @param {Array.<Integer>} a
  // @param {Integer} p Pivot point
  // @param {Integer} s Start bound
  // @param {Integer} e End bound
  // @return {Array.<Array>} First element of an array is a first partition, second is second
  var partition = function(a, p, s, e){
    if(p>s){
      swap(a,p,s);
      p=s;
    }

    var i = s+1;

    for(j = s+1; j<=e; j++){
      if(a[j]<a[p]){
        swap(a,j,i);
        i++;
      }
    }

    swap(a,p,i-1);

    return [
      [s,i-1],
      [i,e]
    ];
  }

  // Main recursion loop
  // @param {Array.<Integer>} a
  // @param {Integer} s Start bound
  // @param {Integer} e End bound
  // @return {Array.<Integer>}
  var sort = function(a, s, e){
    if((e-s)<2){
      return a;
    }else{
      var pp = choosePivot(a,s,e);
      var pa = partition(a,pp,s,e);

      sort(a,pa[0][0],pa[0][1]);
      sort(a,pa[1][0],pa[1][1]);

      return a;
    }
  }
}