class Solution {
    
  	printCorner(root){
  		let q = [];
  		const cornerNodes = [];
  		q.push(root);
  		
  		while (q.length != 0) {
  		    const nextLevelQ = [];
  		    
  		    cornerNodes.push(q[0].data);
  		    if (q.length > 1) {
  		        cornerNodes.push(q[q.length - 1].data);
  		    }
  		    
  		    for (let i = 0; i < q.length; i++) {
  		        if (q[i].left != null) {
  		            nextLevelQ.push(q[i].left);
  		        }
  		        if (q[i].right != null) {
  		            nextLevelQ.push(q[i].right);
  		        }
  		    }
  		    
  		    q = nextLevelQ;
  		}
  		
  		console.log(cornerNodes.join(' '));
  	}
}
