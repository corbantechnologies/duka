export const Heading = ({
    title,
    description
})=>{
    return (
      <div>
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
}