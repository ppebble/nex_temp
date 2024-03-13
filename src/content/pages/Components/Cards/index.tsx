import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Footer from '../../../../components/Footer';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const bull = (
	<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
		•
	</Box>
);

const Cards = () => {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Container maxWidth="md">
			<Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Complex Example" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia
									sx={{
										height: 0,
										paddingTop: '56.25%', // 16:9
									}}
									image="/static/images/placeholders/covers/1.jpg"
									title="Paella dish"
								/>
								<CardActions disableSpacing>
									<IconButton aria-label="add to favorites">
										<FavoriteIcon />
									</IconButton>
									<IconButton aria-label="share">
										<ShareIcon />
									</IconButton>
									<ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
										<ExpandMoreIcon />
									</ExpandMore>
								</CardActions>
								<Collapse in={expanded} timeout="auto" unmountOnExit />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2}>
					<Card>
						<CardHeader title="Media" />
						<Divider />
						<CardContent>
							<Card sx={{ maxWidth: 95 }}>
								<CardMedia sx={{ height: 140 }} image="/static/images/placeholders/covers/6.jpg" title="Contemplative Reptile" />
							</Card>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Cards;
