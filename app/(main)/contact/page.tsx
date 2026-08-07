import ContactBanner from "@/components/contact/ContactBanner";
import WaysToConnect from "@/components/contact/WaysToConnect";

export default function ContactPage() {
    return (
        <>
            {/* HERO */}
            <ContactBanner />

            {/* OTHER WAYS */}
            <WaysToConnect />
        </>
    );
}