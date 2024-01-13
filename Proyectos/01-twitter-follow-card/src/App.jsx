import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const users = [
    {
        userName: "anarkoyonki",
        isFollowing: true,
        name: "Carlos"
    },
    {
        userName: "anarkoputa",
        isFollowing: false,
        name: "roi"
    },
    {
        userName: "usuario3",
        isFollowing: true,
        name: "Nombre del Usuario 3"
    }
]
export function App() {
    return (
        <section className='App'>
            {
                users.map(user=>{
                    const{userName,name,isFollowing}=user
                    return(
                        <TwitterFollowCard
                        key={userName} //Tiene que ser algo que se sepa que es unico como por ejemplo un id de una base de datos
                                        //o en este caso el usuario 
                        userName={userName}
                        initialisFollowing={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}