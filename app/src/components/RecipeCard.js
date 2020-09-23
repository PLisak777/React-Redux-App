import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export const RecipeCard = (props) => {


	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			{props.is_loading_data ? (
				<div>**fetching recipe**</div>
			) : props.error ? (
				<div style={{ color: 'red' }}>{props.error}</div>
			) : (
				<></>
			)}
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" className={classes.avatar}>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={props.strMeal}
					// subheader={new Date()}
				/>
				<CardMedia
					className={classes.media}
					image={props.strMealThumb}
					title={props.strMeal}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.strMeal}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="shares">
						<ShareIcon />
					</IconButton>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpand}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>Instructions:</Typography>
						<Typography paragraph>{props.strInstructions}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		meals: state.meals,
		strMealThumb: state.strMealThumb,
		is_loading_data: state.is_loading_data,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchData })(RecipeCard);
