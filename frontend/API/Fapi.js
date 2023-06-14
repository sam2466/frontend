import useSWR from 'swr';

const apiURL = "http://localhost:5000/api/members/"

const myFetch = async (method,url,body) => {
    let options ={
        method: method,
        headers:{"Content-type": "application/json; charset=utf-8"}
        };
    if(method !== "GET"){
        options={...options,body:JSON.stringify(body)};
    }
    const response = await fetch(url,options);
    const result = await response.json();
    console.log(url);
    

    return result;
    }
    

    const Fapi={


        getAllType:()=>{
            const path = apiURL+'sidebar/type';
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },
        getBrandByType:(type,brand)=>{
            const path = apiURL+'sidebar/'+type+'/'+brand;
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },
         getItemByName:(name)=>{
            const path = apiURL+'itemName/'+name;
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },
        getItemById:(id)=>{
            const path = apiURL+'item/'+id;
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },
        getRandom5:()=>{
            const path = apiURL+'random5';
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*100})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },
        getItem:()=>{
            const path = apiURL+'item';
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },
         getRecordByid:(id)=>{
            const path = apiURL+'record/'+id;
            const fetcher = (path) => fetch(path).then((r)=>r.json())
            const{data,mutate,error,isLoading}=useSWR(path,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return{members:data,mutate,error,isLoading:loading}
        },


        updateItem:(item)=>myFetch('PUT',apiURL+'updateItem',item),
        newItem:(item)=> myFetch('POST',apiURL+'item',item),
        quantity:(id,i_quantity)=> myFetch('PUT',apiURL+'item/'+id,id,i_quantity),
        deleteItem:(id)=> myFetch('DELETE',apiURL+'item/'+id,{id}),
        randomItem:()=> myFetch('GET',apiURL+'random5'),
        isLogin:(account,password)=>myFetch('GET',apiURL+`login?${new URLSearchParams({account,password})}`),
        newUser:(cname)=>myFetch('POST',apiURL+'customer',{cname}),
        updateUser:(account)=> myFetch('PUT',apiURL+'/customer/changePassword',{account}),
        deleteUser:(id)=> myFetch('DELETE',apiURL+'customer/'+{id},{id}),
        newRecord:(aMember)=> myFetch('POST',apiURL+'record',aMember),
        
    
    
    }

    export default Fapi;