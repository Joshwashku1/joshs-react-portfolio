import React from 'react';
import photo from '../../profile.jpg'

const styles = {
    img: {
        maxWidth: 200,
        maxHeight: 200
    }
}

export default function About() {
    return(
        <div>
            <img alt="profile pic" src={photo} className="profile-photo" style={styles.img}></img>

            <p>I am originally from Tucson, AZ. I helped my father create a vineyard in rural Minnesota.
            I studied History and Computer Science at the University of Minnesota Morris. I currently work
            at Danfoss, helping the company assemble motors. 
            Fun Fact: I was able to have the opportunity to play
            at the famous <a href="https://www.youtube.com/watch?v=deZSTAAmR6Y">Whiskey A Go-Go</a> in Los Angeles, California, where our band backed up 
            the group 'Sweet'!
            </p>
        </div>
    ); 
}