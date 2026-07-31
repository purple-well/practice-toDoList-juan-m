function ProfileCard({ name, age, bio, index }) {
    return (
        <div className="card">
            <h2>Profile Card</h2>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
}

export default ProfileCard;