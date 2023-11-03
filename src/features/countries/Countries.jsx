import React from "react";
import { useGetAllCountriesQuery } from "../../services/countries";

const Countries = ()=>{

    const {isLoading, data} = useGetAllCountriesQuery();

    return(
        <div className="border border-dark p-4 m-1">
            <h3>Countries </h3>
            {
                isLoading && <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterprogramming.pub%2Fhow-to-create-a-loading-screen-for-client-side-fetching-in-nextjs-eaede11c0921&psig=AOvVaw2M3kQykyVRkHhoTetBai2k&ust=1698497526922000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDv7L-iloIDFQAAAAAdAAAAABAo" alt="" />
            }
            <ul>
                {
                    !isLoading && (
                        data.map((c,i)=>{
                            return <li key={i}>{c.name.common}</li>
                        })
                    )
                }
            </ul>
        </div>
    )
};

export default Countries;