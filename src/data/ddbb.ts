export const data: Type[] = [
    {
        "id":"1",
        "name": "Madrid",
        "country": "ESP"
    }, 
    {
        "id":"2",
        "name": "Barcelona",
        "country": "ESP"
    }, 
    {
        "id":"3",
        "name": "Paris",
        "country": "FRC"
    }, 
]

export interface Type {
    id: string;
    name: string;
    country:string;
}