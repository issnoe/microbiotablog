import React from 'react';
import styled from '@emotion/styled';

interface PostUpsetProps {
  className?: string;
}

export const PostUpset: React.FC<PostUpsetProps> = ({ children, className }) => (
  <StyledPostUpset className={className}>{children}</StyledPostUpset>
);

const StyledPostUpset = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

