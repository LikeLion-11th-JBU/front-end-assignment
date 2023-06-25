import { dbService } from "fbase";
import React, { useState, useEffect } from "react";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import Nweets from "components/Nweet";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(nweetArr);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(dbService, "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            });
            } catch (e) {
            console.error("Error adding document: ", e);
            }
            setNweet("");
            };
            const onChange = (event) => {
            const {
            target: { value },
            } = event;
            setNweet(value);
            };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet, idx) => (
                    <Nweets 
                        nweetObj={nweet} 
                        key={idx} 
                        isOwner={nweet.creatorId === userObj.uid}
                        newNweet={nweet}
                    />
                ))}
            </div>
        </div>
    );
};
export default Home;