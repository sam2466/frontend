import useSWR from 'swr';

const apiURL = "http://localhost:5000/api/member/"

const myFetch = async (method,url,body) => {
    let options ={
        method: method,
        headers:{"Content-type": "application/json; charset=utf-8"}
        };
    if(method !== "GET"){
        options={...options,body:JSON.stringify(body)}
    }
    const response = await fetch(url,options);
    const result = await response.json();
    console.log(result);
    return result;
    }

    const Fapi={
        useMembers:()=>{
            const fetcher = (url) => fetch(url).then((res)=>res.json())
            const {data,mutate,error,isLoading} = useSWR(apiURL,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return {members:data,mutate,error,isLoading,loading}
        },
        getAllType:()=> myFetch('GET',apiURL+'sidebar/type'),
        getBrandByType:(type)=> myFetch('GET',apiURL+'sidebar/'+type),
        getItemByBrand:(type,brand)=> myFetch('GET',apiURL+'sidebar/'+type+'/'+brand),
        getItemById:(id)=> myFetch('GET',apiURL+'item/'+id),
        getItemByName:(name)=>('GET',apiURL+'item/'+name),
        newItem:(item)=> myFetch('POST',apiURL+'item',{item}),
        ////////////////////////////////////////////////////////////
        quantity:(id,i_quantity)=> myFetch('PUT',apiURL+'item/'+id,{id},{i_quantity}),
        deleteItem:(id)=> myFetch('DELETE',apiURL+'item/'+id,{id}),
        randomItem:()=> myFetch('GET',apiURL+'random5'),
        isLogin:(account,password)=>myFetch('GET',apiURL+'login'),
        newUser:(cname)=>myFetch('POST',apiURL+'customer',{cname}),
        updateUser:(account)=> myFetch('PUT',apiURL+'/customer/changePassword',{account}),
        deleteUser:(id)=> myFetch('DELETE',apiURL+'customer/'+{id},{id}),
        newRecord:(aMember)=> myFetch('POST',apiURL+'record',aMember),
        getRecordByid:(id)=>myFetch('GET',apiURL+'record/'+id,{id}),
    }

    export default Fapi;