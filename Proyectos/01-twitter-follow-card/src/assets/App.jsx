import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const formatUserName=(userName)=>`@${userName}`
    return (
    <section className='App'>
    <TwitterFollowCard formatUserName={formatUserName}  userName="anarkoyonki">
    Carlos
    </TwitterFollowCard>
    
    <TwitterFollowCard formatUserName={formatUserName} userName="anarkoputa">
        Roi
    </TwitterFollowCard>
  
    </section>
    )
}