const AddressLink: React.FC<{ link: string; address: string }> = ({
    link,
    address,
}) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        {address}
    </a>
);

export default AddressLink;
