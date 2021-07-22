import React, { useState, useEffect } from 'react'


const DumpsterTimeline = props => {

    const hoverBuddy = {
        cursor: 'pointer'
    }

    const textBuddy = {
        height: '100%',
        width: '100%',
        padding: '0px',
        fontSize: '20px'
    }

    const sideBuddy = {
        transform: 'translate(4px)'
    }

    const imgBuddy = {
        height: '70px',
        width: '70px',
        borderRadius: '10px'
    }

    const chirpBuddy = {
        borderRadius: '10px'
    }

    const [update, setUpdate] = useState('')
    const [array2, setArray2] = useState('')
    const [array, setArray] = useState([{
        text: 'we could catch unlimited breadsticks at the all of garden or we could just put a bun in the oven ahaha 👉👈',
        day: '6/15/2021',
        time: '01:21pm',
        id: Math.random()
    },
    {
        text: 'finally got my 99 in firemaking only took 4 years',
        day: '6/19/2021',
        time: '12:46am',
        id: Math.random()
    },
    {
        text: "react honestly isn't that hard it's just chaotic",
        day: '6/22/2021',
        time: '09:46am',
        id: Math.random()
    }])

    const typingPost = (e) => {
        setUpdate(e.target.value)
    }

    const newPost = () => {
        let date = new Date();
        let prePost = {
            text: update,
            day: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            id: Math.random()
        };
        setArray([...array, prePost])
    }

    useEffect(() => {
        let correctedDisplayedPosts = displayedPosts.reverse();
        setArray2(correctedDisplayedPosts)
    }, [array])

    useEffect(() => {
        setTimeout(() => { setArray2(displayedPosts); }, 100)
    }, [])

    const displayedPosts = array.map(val => {
        return (
            <blockquote style={chirpBuddy} class="blockquote bg-white border p-5">
                <div class='row'>
                    <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                    <div class='col-8'>
                        <div class='pl-5 lead'>{props.nickName}</div>
                        <p key={`the-array-${val.id}`} class="pl-5 mb-0">{val.text}</p>
                        <footer class="ml-5 blockquote-footer">{props.at}{props.username} on <cite title="Source Title">{val.day} at {val.time}</cite></footer>
                    </div>
                </div>
            </blockquote>
        )
    });

    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.add('text-danger')
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.add('text-danger')
        console.log(array2)
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.add('text-danger')
    }

    const hoverLeaveLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.remove('text-danger')
    }

    const hoverEnterRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.remove('text-danger')
    }

    

        return (
            <div>
                <div class='pb-1'>
                    <div class='row pb-2 mb-4 d-flex flex-row bg-danger bg-gradient text-white'>
                        <div class='col-2 display-4 text-center'>‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎🗑️</div>
                        <div class='col-10 pl-4 display-4' >{props.nickName}'s timeline</div>
                </div>
                    <div class='row d-flex'>
                        <div class='col-2'>
                            <div class=''>
                                <div class='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost' onClick={() => newPost()} style={hoverBuddy} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>Post</div>
                            </div>
                            <div>
                                <div class='border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>Add Image</div>
                            </div>
                            <div>
                                <div class='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>Add Link</div>
                            </div>
                        </div>
                        <div class='col-9'>

                            <textarea style={textBuddy} onChange={e => typingPost(e)} class="p-2" rows="2"></textarea>
                        </div>
                        <div class='col-1'></div>
                    </div>
                    <div class='row d-flex'>
                        <div style={sideBuddy} class='col-2 position-fixed lead text-right'>

                            <div>
                                <div class='invisible border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} >Add Image</div>
                            </div>
                            <div>
                                <div class='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy}></div>
                            </div>
                            <div>
                                <div class='border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={hoverBuddy}></div>
                            </div>
                            <div>
                                <div class='border-right lead invisible border-secondary text-right pr-2' id='btnLink' style={hoverBuddy}></div>
                            </div>
                            <div>
                                <div class='invisible border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={hoverBuddy}></div>
                            </div>
                            <div>
                                <div id='btnLike' style={hoverBuddy} onMouseEnter={() => hoverEnterLike()} onMouseLeave={() => hoverLeaveLike()} class='border-right mt-3 lead border-secondary text-right pr-2'>Like</div>
                            </div>
                            <div class=''>
                                <div id='btnRec' style={hoverBuddy} onMouseEnter={() => hoverEnterRec()} onMouseLeave={() => hoverLeaveRec()} class='border-right lead border-secondary text-right pr-2'>Repost</div>
                            </div>
                            <div>
                                <div id='btnSave' style={hoverBuddy} onMouseEnter={() => hoverEnterSave()} onMouseLeave={() => hoverLeaveSave()} class='border-right lead border-secondary text-right pr-2'>Save</div>
                            </div>
                            <div>
                                <div id='btnShare' style={hoverBuddy} onMouseEnter={() => hoverEnterShare()} onMouseLeave={() => hoverLeaveShare()} class='border-right mb-3 lead border-secondary text-right pr-2'>Share</div>
                            </div>
                            <div>
                                <div class='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} ></div>
                            </div>
                        </div>
                        <div id='mainbody' class='col-9 d-flex flex-column offset-2 mt-3 overflow-auto'>
                            <div class=''>{array2}</div>
                        </div>
                        <div class='col-1 offset-11'></div>
                    </div>
                    <div class='d-flex row mt-5 mb-5'>
                        <div class='col-12'>
                            <div class='lead justify-content-center row'>End of Feed</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
};

export default DumpsterTimeline;



