import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModulePlaceholder = ({ title }) => {
    const navigate = useNavigate();
    const [requested, setRequested] = React.useState(false);

    const handleRequest = () => {
        setRequested(true);
        // In real app, this would send an API call
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 animate-in fade-in zoom-in duration-300">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Construction size={48} className="text-indigo-600" />
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-500 max-w-md mb-8">
                This module is currently in <b>Beta</b> or disabled for your organization.
                {requested ? ' Access request has been sent to the administrator.' : ' Request early access to enable this feature.'}
            </p>
            <div className="flex gap-4">
                <button onClick={() => navigate(-1)} className="btn btn-ghost border border-gray-200 hover:bg-gray-50">
                    <ArrowLeft size={18} className="mr-2" /> Go Back
                </button>
                <button
                    onClick={handleRequest}
                    disabled={requested}
                    className={`btn ${requested ? 'bg-green-600 hover:bg-green-700 cursor-default' : 'btn-primary'}`}
                >
                    {requested ? '✓ Access Requested' : 'Request Early Access'}
                </button>
            </div>
        </div>
    );
};

export default ModulePlaceholder;
