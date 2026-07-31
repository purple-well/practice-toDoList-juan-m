import ProfileCard from "./ProfileCard";

function ProfileContainer() {
    const profiles = [
        {
            name: "Bruce",
            age: 37,
            bio: "I am Batman"
        },
        {
            name: "Bluey",
            age: 7,
            bio: "I am blue"
        },
        {
            name: "Vader",
            age: 47,
            bio: "I am your father"
        }
    ]

    return (
        <div>

        <h1>User Profiles:</h1>

            {profiles.map((profile, index) => (
                <ProfileCard
                    key={index}
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                />
            ))}
        </div>
    );
}

export default ProfileContainer;