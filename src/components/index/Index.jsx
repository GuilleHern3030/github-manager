import styles from "./Index.module.css"
import GitHubEditor from "../github-editor/GithubEditor"

export default function Index() {
    return <main className={styles.main}>
        <GitHubEditor/>
    </main>
}