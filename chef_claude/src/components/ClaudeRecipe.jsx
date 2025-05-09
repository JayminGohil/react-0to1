import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    const cleanedRecipe = props.recipe.replace(/```markdown|\n```/g, "");
    return (
        <section className='chef-claude-recipe-container'>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{cleanedRecipe}</ReactMarkdown>
        </section>
    )
}