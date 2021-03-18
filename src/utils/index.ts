import { format } from "date-fns";

export function formatCurrency(amount: number, currency = "EUR", lang = "en"): string {
	return new Intl.NumberFormat(lang, { style: "currency", currency }).format(amount);
}

export function formatDate(dateString: string): string {
	if (!dateString) {
		return "";
	}

	const date = new Date(dateString);

	return format(date, "dd.MM.yyyy");
}
