/**
 * External dependencies
 */
import React, { FunctionComponent } from 'react';
import { Icon, wordpress } from '@wordpress/icons';
import { useI18n } from '@automattic/react-i18n';

/**
 * Internal dependencies
 */
import Link from '../link';
import './style.scss';

interface Props {
	linkTo: string;
}

const CreateSiteError: FunctionComponent< Props > = ( { linkTo } ) => {
	const { __ } = useI18n();

	return (
		<div className="gutenboarding-page create-site-error__background">
			<div className="create-site-error__header">
				<div className="gutenboarding__header-wp-logo create-site-error__logo">
					<Icon icon={ wordpress } size={ 28 } />
				</div>
			</div>
			<div className="create-site-error__wrapper">
				<div className="create-site-error__content">
					<h1 className="create-site-error__heading">{ __( 'Something went wrong…' ) }</h1>
					<p className="create-site-error__message">
						{ __(
							'Please go back and try again. If the problem continues please contact support.'
						) }
					</p>
					<p className="create-site-error__links">
						<Link isPrimary to={ linkTo }>
							{ __( 'Go Back' ) }
						</Link>
						<Link to="https://wordpress.com/support/contact/">{ __( 'Contact Support' ) }</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CreateSiteError;
