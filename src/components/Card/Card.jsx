import StyledCard from './Card.style';

const Card = ({ post }) => {
  return (
    <StyledCard>
      <div className='logo'>
        <img src='/default.svg' alt='logo' height='50px' />
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </StyledCard>
  );
};
export default Card;
