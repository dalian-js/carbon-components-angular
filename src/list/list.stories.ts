/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { ListModule, List } from "./";

export default {
	title: "Components/List",
	decorators: [
		moduleMetadata({
			imports: [ListModule]
		})
	],
	parameters: {
		layout: "centered"
	},
	component: List
} as Meta;

const Template: Story<List> = (args) => ({
	props: args,
	template: `
		<p>Ordered List</p>
		<ol ibmList>
			<li ibmListItem>One</li>
			<li ibmListItem>Two</li>
			<li ibmListItem>Three</li>
		</ol>
		<p>Unordered List</p>
		<ul ibmList>
			<li ibmListItem>One</li>
			<li ibmListItem>Two</li>
			<li ibmListItem>Three</li>
		</ul>
	`
});
export const Basic = Template.bind({});

const NestingTemplate: Story<List> = (args) => ({
	props: args,
	template: `
		<p>Ordered List</p>
		<ol ibmList>
			<li ibmListItem>
				One
				<ol ibmList>
					<li ibmListItem>Nested one</li>
					<li ibmListItem>Nested two</li>
					<li ibmListItem>Nested three</li>
				</ol>
			</li>
			<li ibmListItem>Two</li>
			<li ibmListItem>Three</li>
		</ol>
		<p>Unordered List</p>
		<ul ibmList>
			<li ibmListItem>
				One
				<ul ibmList>
					<li ibmListItem>Nested one</li>
					<li ibmListItem>Nested two</li>
					<li ibmListItem>Nested three</li>
				</ul>
			</li>
			<li ibmListItem>Two</li>
			<li ibmListItem>Three</li>
		</ul>
	`
});
export const Nesting = NestingTemplate.bind({});
