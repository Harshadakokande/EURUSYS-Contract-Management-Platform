/**
 * Blueprint Create Page
 */

import { useNavigate } from 'react-router-dom';
import { useBlueprintStore } from '../../../stores';
import { PageHeader } from '../../../components/Layout';
import { BlueprintForm } from '../../../components/features/BlueprintForm/BlueprintForm';
import type { BlueprintField } from '../../../types';

interface BlueprintCreatePayload {
    name: string;
    description: string;
    fields: BlueprintField[];
}

export function BlueprintCreate() {
    const navigate = useNavigate();
    const addBlueprint = useBlueprintStore((state) => state.addBlueprint);

    const handleSubmit = (data: BlueprintCreatePayload) => {
        addBlueprint(data);
        navigate('/blueprints');
    };

    return (
        <>
            <PageHeader
                title="Create Blueprint"
                description="Design a new contract template"
            />
            <BlueprintForm
                onSubmit={handleSubmit}
                onCancel={() => navigate('/blueprints')}
            />
        </>
    );
}
