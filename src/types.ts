/**
 * Configuration settings for entity display and behavior.
 */
export interface Config {
    area: string;

    entities: EntityConfig[];
}

export interface EntityConfig {
    entity_id: string;
}

/**
 * Root interface representing the Home Assistant instance structure.
 * Contains collections of entities and devices managed by Home Assistant.
 */
export interface HomeAssistant {
    /** Array of all entities registered in Home Assistant */
    entities: Entity[];

    /** Array of all physical devices registered in Home Assistant */
    devices: Device[];

    /** Object containing the current state of all entities in Home Assistant */
    states: State[];

    areas: Area[];
}

export interface Area {
    area_id: string;
    icon: string;
}

/**
 * Represents a physical device in Home Assistant.
 */
export interface Device {
    /** ID of the area where this device is located */
    area_id: string;
}

/**
 * Represents the current state and attributes of a Home Assistant entity.
 * Used to track an entity's status and properties at a given moment.
 */
export type State = {
    /**
     * Unique identifier for the entity.
     * Format: `<domain>.<object_id>` (e.g. "light.living_room", "switch.kitchen")
     */
    entity_id: string;

    /**
     * Current state of the entity.
     * Common values include: "on", "off", "unavailable", or numeric values
     */
    state: string;

    /**
     * Collection of additional entity attributes.
     * Can include properties like brightness, color, temperature, etc.
     * Keys are strings, values can be any type
     */
    attributes: Record<string, any>;
};

/**
 * Represents a Home Assistant entity with its relationships to areas and devices.
 */
export interface Entity {
    /** ID of the area where this entity is located */
    area_id: string;

    /** ID of the physical device this entity belongs to */
    device_id: string;
}
