import useSWR from 'swr';

const apiURL = "http://localhost:5000/api/member/"

const myFetch = async (method,url,body) => {
    let options ={
        method: method,
        headers:{"content-type": "application/json; charset=utf-8"}
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
        state:()=>{
            const fetcher = (url) => fetch(url).then((res)=>res.json())
            const {data,mutate,error,isLoading} = useSWR(apiURL,fetcher,{refreshInterval:1000*10})
            const loading = !data && !error;
            return {datas:data,mutate,error,isLoading,loading}
        },
        getAllType:()=> myFetch('GET',apiURL+'sidebar/type'),
        getBrandByType:(type)=> myFetch('GET',apiURL+'sidebar/'+type),
        getItemByBrand:(type,brand)=> myFetch('GET',apiURL+'sidebar/'+type+'/'+brand),
        getItemById:(id)=> myFetch('GET',apiURL+'item/'+id),
        getItemByName:(name)=>('GET',apiURL+'item/'+name),
        newItem:(item)=> myFetch('POST',apiURL+'item',item),
        updateItem:(id)=> myFetch('PUT',apiURL+'item/'+id,{id}),
        deleteItem:(id)=> myFetch('DELETE',apiURL+'item/'+id,{id}),
        isLogin:()=>myFetch('GET',apiURL+'/login'),
        newUser:(data)=>myFetch('POST',apiURL+'customer',data),
        updateUser:(data)=> myFetch('PUT',apiURL+'/customer/changePassword',data),
        newRecord:(data)=> myFetch('POST',apiURL+'record',data),
        getRecordByid:(id)=>myFetch('GET',apiURL+'record/'+id),
    }

    export default Fapi;