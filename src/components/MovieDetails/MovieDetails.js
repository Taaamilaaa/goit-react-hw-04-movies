import styles from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css"

export const MovieDetails = ({ title, date, poster, vote, overview, genres }) => {
    return (
        <>
            <h1 className={styles.title}>
                {title}
                <span>({date})</span>
            </h1>

            <div className={styles.flex}>
                <img src={poster} alt={title} className={styles.img} />
                <div className={styles.content}>
                    <p>
                        User score: <span> {vote}</span>
                    </p>
                    <h2 className={styles.title}>Overview:</h2>
                    <p> {overview}</p>
                    <h2 className={styles.title}>Genres:</h2>
                    <ul>
                        {genres.map(({ name, id }) => (
                            <li key={id}>{name}</li>
                        ))}{" "}
                    </ul>
                </div>
            </div>
            
        </>
    )
};