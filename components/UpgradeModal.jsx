"use client"

import { AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { PricingTable } from "@clerk/nextjs";

const UpgradeModal = ({ open, onOpenChange, reason }) => {
    return <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={"border-blue-200/10 min-w-[70vw] max-h-[90vh] overflow-y-scroll"}>
            <DialogHeader>
                <div className="flex items-start gap-2 mb-2">
                    <AlertCircle className="text-blue-400 ml-2 mt-1"/>
                
                <DialogTitle className={"font-serif text-2xl"}>Upgrade Your Plan</DialogTitle>
                {
                    reason && (
                        <DialogDescription className={"text-blue-400 mt-1"}>
                            {reason}
                        </DialogDescription>
                    )
                }
                </div>
            </DialogHeader>

            <div className="px-2 pb-6">
                <PricingTable checkoutProps={{
                    appearance:{
                        elements:{
                            drawerRoot:{
                                zIndex:2000
                            }
                        }
                    }
                }} />
            </div>
        </DialogContent>
    </Dialog>
};

export default UpgradeModal;