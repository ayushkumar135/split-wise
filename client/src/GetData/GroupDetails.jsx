const getGroupDetails = async (set, _id) => {
    try {
        const res = await fetch(`/group/member/${_id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!res) {
            alert("Error");
        }
        const data = await res.json();
        set(data);
        
    } catch (err) {
        console.log(err);
    }
}

export default getGroupDetails;