var hive_keychain={current_id:1,requests:{},handshake_callback:null,requestHandshake:function(e){this.handshake_callback=e,this.dispatchCustomEvent("swHandshake_hive","")},requestEncodeMessage:function(e,t,s,n,i){var r={type:"encode",username:e,receiver:t,message:s,method:n};this.dispatchCustomEvent("swRequest_hive",r,i)},requestVerifyKey:function(e,t,s,n){var i={type:"decode",username:e,message:t,method:s};this.dispatchCustomEvent("swRequest_hive",i,n)},requestSignBuffer:function(e,t,s,n,i,r){var u={type:"signBuffer",username:e,message:t,method:s,rpc:i,title:r};this.dispatchCustomEvent("swRequest_hive",u,n)},requestAddAccountAuthority:function(e,t,s,n,i,r){var u={type:"addAccountAuthority",username:e,authorizedUsername:t,role:s,weight:n,method:"Active",rpc:r};this.dispatchCustomEvent("swRequest_hive",u,i)},requestRemoveAccountAuthority:function(e,t,s,n,i){var r={type:"removeAccountAuthority",username:e,authorizedUsername:t,role:s,method:"Active",rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestAddKeyAuthority:function(e,t,s,n,i,r){var u={type:"addKeyAuthority",username:e,authorizedKey:t,weight:n,role:s,method:"Active",rpc:r};this.dispatchCustomEvent("swRequest_hive",u,i)},requestRemoveKeyAuthority:function(e,t,s,n,i){var r={type:"removeKeyAuthority",username:e,authorizedKey:t,role:s,method:"Active",rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestBroadcast:function(e,t,s,n,i){var r={type:"broadcast",username:e,operations:t,method:s,rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestSignTx:function(e,t,s,n,i){var r={type:"signTx",username:e,tx:t,method:s,rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestSignedCall:function(e,t,s,n,i,r){console.warn("requestSignedCall has been deprecated.")},requestPost:function(e,t,s,n,i,r,u,o,a,c){var h={type:"post",username:e,title:t,body:s,parent_perm:n,parent_username:i,json_metadata:r,permlink:u,comment_options:o,rpc:c};this.dispatchCustomEvent("swRequest_hive",h,a)},requestVote:function(e,t,s,n,i,r){var u={type:"vote",username:e,permlink:t,author:s,weight:n,rpc:r};this.dispatchCustomEvent("swRequest_hive",u,i)},requestCustomJson:function(e,t,s,n,i,r,u){var o={type:"custom",username:e,id:t,method:s||"Posting",json:n,display_msg:i,rpc:u};this.dispatchCustomEvent("swRequest_hive",o,r)},requestTransfer:function(e,t,s,n,i,r,u=!1,o){var a={type:"transfer",username:e,to:t,amount:s,memo:n,enforce:u,currency:i,rpc:o};this.dispatchCustomEvent("swRequest_hive",a,r)},requestSendToken:function(e,t,s,n,i,r,u){var o={type:"sendToken",username:e,to:t,amount:s,memo:n,currency:i,rpc:u};this.dispatchCustomEvent("swRequest_hive",o,r)},requestDelegation:function(e,t,s,n,i,r){var u={type:"delegation",username:e,delegatee:t,amount:s,unit:n,rpc:r};this.dispatchCustomEvent("swRequest_hive",u,i)},requestWitnessVote:function(e,t,s,n,i){var r={type:"witnessVote",username:e,witness:t,vote:s,rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestProxy:function(e,t,s,n){var i={type:"proxy",username:e,proxy:t,rpc:n};this.dispatchCustomEvent("swRequest_hive",i,s)},requestPowerUp:function(e,t,s,n,i){var r={type:"powerUp",username:e,recipient:t,hive:s,rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestPowerDown:function(e,t,s,n){var i={type:"powerDown",username:e,hive_power:t,rpc:n};this.dispatchCustomEvent("swRequest_hive",i,s)},requestCreateClaimedAccount:function(e,t,s,n,i,r,u,o){const a={type:"createClaimedAccount",username:e,new_account:t,owner:s,active:n,posting:i,memo:r,rpc:o};this.dispatchCustomEvent("swRequest_hive",a,u)},requestCreateProposal:function(e,t,s,n,i,r,u,o,a,c){const h={type:"createProposal",username:e,receiver:t,subject:s,permlink:n,start:r,end:u,daily_pay:i,extensions:o,rpc:c};this.dispatchCustomEvent("swRequest_hive",h,a)},requestRemoveProposal:function(e,t,s,n,i){const r={type:"removeProposal",username:e,proposal_ids:t,extensions:s,rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestUpdateProposalVote:function(e,t,s,n,i,r){const u={type:"updateProposalVote",username:e,proposal_ids:t,approve:s,extensions:n,rpc:r};this.dispatchCustomEvent("swRequest_hive",u,i)},requestAddAccount:function(e,t,s){const n={type:"addAccount",username:e,keys:t};this.dispatchCustomEvent("swRequest_hive",n,s)},requestConversion:function(e,t,s,n,i){const r={type:"convert",username:e,amount:t,collaterized:s,rpc:i};this.dispatchCustomEvent("swRequest_hive",r,n)},requestRecurrentTransfer:function(e,t,s,n,i,r,u,o,a){const c={type:"recurrentTransfer",username:e,to:t,amount:s,currency:n,memo:i,recurrence:r,executions:u,rpc:a};this.dispatchCustomEvent("swRequest_hive",c,o)},dispatchCustomEvent:function(e,t,s){this.requests[this.current_id]=s,t=Object.assign({request_id:this.current_id},t),document.dispatchEvent(new CustomEvent(e,{detail:t})),this.current_id++}};window.addEventListener("message",(function(e){if(e.source==window)if(e.data.type&&"hive_keychain_response"==e.data.type){const t=e.data.response;t&&t.request_id&&hive_keychain.requests[t.request_id]&&(hive_keychain.requests[t.request_id](t),delete hive_keychain.requests[t.request_id])}else e.data.type&&"hive_keychain_handshake"==e.data.type&&hive_keychain.handshake_callback&&hive_keychain.handshake_callback()}),!1);