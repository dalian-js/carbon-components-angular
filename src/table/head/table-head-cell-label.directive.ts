import {
	Directive,
	HostBinding
} from "@angular/core";

@Directive({
	selector: "[ibmTableHeadCellLabel]"
})


export class TableHeadCellLabel {
	@HostBinding("class.cds--table-header-label") baseClass = true;
}
