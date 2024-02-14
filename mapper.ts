


export const carsMapper :{[key:string]:{title:string,src:string}} = {
    "SUV" :{title:'SUV',src:'/SUV.svg'},
    "super_cars":{title:'Super cars',src:'/super cars.svg'},
    "sports":{title:'Sports',src:'/sports.svg'},
    "convertable":{title:'Convertable',src:'/convertable.svg'},
    "classics":{title:'Classics',src:'/classics.svg'},
    "business":{title:'Business',src:'/business.svg'}
}


export const carsElectric :{[key:string]:string} ={
    "fully_electric":'Fully electric',
    'hybrid':'Hybrid'

}

export const seatsMapper : {[key:string]:number[]} = {
   '2 seats' : [2],
   '4+ seats' : [4,5,6,7,]
}


export const doorsMapper : {[key:string]:number[]} = {
    '2 doors' : [2],
    '4+ doors' : [4,5,6,7,]
 }