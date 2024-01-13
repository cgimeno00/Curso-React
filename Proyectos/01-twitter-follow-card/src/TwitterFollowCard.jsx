
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName, initialisFollowing }) {

   


    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    console.log("rendering with userName", userName)

    const handleClick = () => {
     
        setIsFollowing(!isFollowing)
    }


    return (


        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Mi avatar"
                    src={`https://unavatar.io/twitter/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>

                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir </span>
                </button>
            </aside>

        </article>

    )
}
