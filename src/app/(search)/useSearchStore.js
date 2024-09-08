import {create} from "zustand";

async function fetchData(url) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const res = await fetch(`${baseUrl}${url}`, { cache: 'force-cache'  });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}
export const useSearchStore = create(
    (set)=>({
       searchResult:[],
        inputValue:'',
        products:[],
       fetchProduct : async ()=>{
           const productsData = await fetchData('./../api/products')
           set((state)=>({
               ...state,
               products:productsData
           }))
       },
        searchProduct: (InputValue)=>{
            set((state)=>{
                if(state.products){
                    const searched = state.products.filter((item,index)=>item.productName.startsWith(InputValue))
                    if(InputValue.length >= 0){
                        return{
                            searchResult :searched,
                            inputValue : InputValue,
                        }
                    }


                }
            })
        }
    })
)